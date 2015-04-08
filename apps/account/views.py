from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json


# functions
def login_show(user):
    user_show = user.username
    if user.first_name is not None:
        user_show = user.last_name + user.first_name
    respose = {'status': True, 'data': {'user': user_show}}
    respose = json.dumps(respose)
    return respose


# Create your views here.
def register(request):
    if request.method == "POST":
        post_data = eval(request.body)

        r_username = post_data.get('username')
        r_email = post_data.get('email')
        r_password = post_data.get('password')
        r_firstname = post_data.get('firstname')
        r_lastname = post_data.get('lastname')

        # create_user(username, email=None, password=None, **extra_fields)
        user = User.objects.create_user(r_username, r_email, r_password)
        user.first_name = r_firstname
        user.last_name = r_lastname

        user.save()

        i_user = authenticate(username=r_username, password=r_password)
        login(request, user)
        respose = login_show(i_user)
        return HttpResponse(respose)


def signin(request):
    if request.method == "POST":
        post_data = eval(request.body)

        username = post_data.get('username')
        password = post_data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                respose = login_show(user)
                return HttpResponse(respose)
            else:
                pass
        else:
            respose = {'status': False, 'data': {'error': '用户名或密码错误！'}}
            respose = json.dumps(respose)
            return HttpResponse(respose)


def signout(request):
    if request.method == "POST":
        logout(request)
        respose = {'status': True, 'data': {}}
        respose = json.dumps(respose, ensure_ascii=False)
        return HttpResponse(respose)
