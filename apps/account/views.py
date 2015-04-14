from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.models import User
from apps.account.models import Profile


# functions
def login_show(user):
    user_show = user.username
    if user.first_name is not None:
        user_show = user.last_name + user.first_name
    respose = {'status': True, 'data': {'user': user_show}}
    return respose


# Create your views here.
def register(request):
    if request.method == "POST":
        post_data = eval(request.body)

        r_username = post_data.get('username', None)
        r_email = post_data.get('email', None)
        r_password = post_data.get('password', None)
        r_firstname = post_data.get('firstname', None)
        r_lastname = post_data.get('lastname', None)

        # create_user(username, email=None, password=None, **extra_fields)
        try:
            new_user = Profile.objects.create_user(
                username=r_username,
                email=r_email,
                password=r_password,
            )
        except Exception as err:
            print(err)

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