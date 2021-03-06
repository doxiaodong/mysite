# coding:utf-8
from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from ..account.models import Profile
from ..comments.models import SubComment
from PIL import Image
from django.conf import settings
import os
from django.utils import timezone

import sys
reload(sys)
sys.setdefaultencoding("utf-8")


# functions
def login_show(user):
    user_show = user.username
    if user.first_name is not None:
        user_show = user.last_name + user.first_name
    respose = {'status': True, 'data': {'user': user_show}}
    return respose


def clip_resize_img(ori_img, dst_w, dst_h):
    im = Image.open(ori_img)
    ori_w, ori_h = im.size

    dst_scale = float(dst_h) / dst_w  #目标高宽比
    ori_scale = float(ori_h) / ori_w  #原高宽比
    if ori_scale >= dst_scale:
        #过高
        width = ori_w
        height = int(width * dst_scale)

        ww = dst_w

    else:
        #过宽
        height = ori_h
        width = int(height * dst_scale)

        ww = int(100 / ori_scale)

    dst_w = ww

    new_im = im

    ratio = float(dst_w) / width
    new_width = int(width * ratio)
    if ori_w < new_width:
        new_width = ori_w

    new_height = int(height * ratio)
    if ori_h < new_height:
        new_height = ori_h

    new_im.thumbnail((new_width, new_height), Image.ANTIALIAS)
    return new_im


# Create your views here.
def register(request):
    if request.method == "POST":
        post_data = eval(request.body)

        r_username = post_data.get('username', None)
        if Profile.objects.filter(username=r_username):
            return JsonResponse({'status': False, 'data': {'error': '用户名已经存在'}})
        else:
            r_email = post_data.get('email', None)
            r_password = post_data.get('password', None)
            r_firstname = post_data.get('firstname', None)
            r_lastname = post_data.get('lastname', None)

            # create_user(username, email=None, password=None, **extra_fields)
            new_user = Profile.objects.create_user(
                username=r_username,
                email=r_email,
                password=r_password,
            )

            if r_firstname:
                new_user.first_name = r_firstname
            else:
                new_user.first_name = r_username

            new_user.last_name = r_lastname

            new_user.save()

            i_user = authenticate(username=r_username, password=r_password)
            login(request, i_user)
            respose = login_show(i_user)
            return JsonResponse(respose)


def signin(request):
    if request.method == "POST":
        post_data = eval(request.body)

        username = post_data.get('username', None)
        password = post_data.get('password', None)
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                respose = login_show(user)
                return JsonResponse(respose)
            else:
                pass
        else:
            respose = {'status': False, 'data': {'error': '用户名或密码错误！'}}
            return JsonResponse(respose)


def signout(request):
    if request.method == "POST":
        logout(request)
        respose = {'status': True, 'data': {}}
        return JsonResponse(respose)


@login_required
def account(request):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False

    global profile
    if request.user:
        profile = Profile.objects.get(username=request.user.username)
        replys = SubComment.objects.filter(reply_object=request.user).order_by('-reply_time')

    context = {
        'not_pjax': not_pjax,
        'profile': profile,
        'replys': replys
    }
    template = 'apps/account/account.html'
    return render(request, template, context)


@login_required
def setting(request):
    if request.method == "POST":
        post_data = request.POST

        s_username = post_data.get('username', None)

        if s_username != request.user.username and Profile.objects.filter(username=s_username):
            return JsonResponse({'status': False, 'data': {'error': '用户名已经存在'}})
        else:
            s_email = post_data.get('email', None)
            s_firstname = post_data.get('firstname', None)
            s_lastname = post_data.get('lastname', None)
            s_sex = post_data.get('sex', None)
            s_pic = request.FILES.get('pic', None)

            s_user = Profile.objects.get(username=request.user.username)

            if s_pic:
                n_s_pic = clip_resize_img(s_pic, 100, 100)

                url = 'user/' + s_pic.name
                name = settings.MEDIA_ROOT + '/' + url
                if os.path.exists(name):
                    file, ext = os.path.splitext(s_pic.name)
                    file += (timezone.now().strftime("%Y-%m-%d_%H_%s"))
                    s_pic.name = file + ext
                    url = 'user/' + s_pic.name
                    name = settings.MEDIA_ROOT + '/' + url
                n_s_pic.save(name)

                s_user.pic = url
            if s_username:
                s_user.username = s_username
            if s_email:
                s_user.email = s_email
            if s_firstname:
                s_user.first_name = s_firstname
            else:
                s_user.first_name = s_username
            s_user.last_name = s_lastname
            s_user.sex = s_sex

            s_user.save()

            respose = login_show(s_user)
            return JsonResponse(respose)

    if request.method == 'GET':
        not_pjax = True
        if 'HTTP_XD_PJAX' in request.META:
            if request.META['HTTP_XD_PJAX'] == 'true':
                not_pjax = False

        profile = None
        if request.user:
            profile = Profile.objects.get(username=request.user.username)

        context = {
            'not_pjax': not_pjax,
            'profile': profile
        }
        template = 'apps/account/setting.html'
        return render(request, template, context)