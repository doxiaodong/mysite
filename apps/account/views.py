from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
import json

# Create your views here.
def register(request):
	if request.method == "POST":
		postData = eval(request.body)

		r_username = postData.get('username')
		r_email = postData.get('email')
		r_password = postData.get('password')
		r_firstname = postData.get('firstname')
		r_lastname = postData.get('lastname')
		
		# create_user(username, email=None, password=None, **extra_fields)
		user = User.objects.create_user(r_username, r_email, r_password)
		user.first_name = r_firstname
		user.last_name = r_lastname

		user.save()

		i_user = authenticate(username=r_username, password=r_password)
		login(request, i_user)

		respose = {'status': True, 'data': {'username': i_user.username}}
		respose = json.dumps(respose)
		return HttpResponse(respose)

def signin(request):
	if request.method == "POST":
		postData = eval(request.body)

		username = postData.get('username')
		password = postData.get('password')
		user = authenticate(username=username, password=password)
		if user is not None:
			if user.is_active:
				login(request, user)
				respose = {'status': True, 'data': {'username': username}}
				respose = json.dumps(respose)
				return HttpResponse(respose)
			else:
				pass
		else:
			pass

def signout(request):
	if request.method == "POST":
		logout(request)
		respose = {'status': True, 'data': {}}
		respose = json.dumps(respose, ensure_ascii=False)
		return HttpResponse(respose)
