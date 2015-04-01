from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
import json

# Create your views here.
def register(request):
	pass

def signin(request):
	template = 'apps/account/signin.html'
	context = {
		'reload': 'true'
	}

	if request.method == "POST":
		postData = eval(request.body)
		
		username = postData.get('username')
		password = postData.get('password')
		user = authenticate(username=username, password=password)
		if user is not None:
			if user.is_active:
				login(request, user)
				print(postData)
				isReload = True
				isReload = json.dumps(isReload)
				# return render(request, template, context)
				return HttpResponse(isReload)
			else:
				return render(request, 'apps/home/index.html', {})
		else:
			pass

def signout(request):
	if request.method == "POST":
		logout(request)
		isLogout = True
		isLogout = json.dumps(isLogout)
		return HttpResponse(isLogout)