from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def register(request):
	pass

def signin(request):
	if request.method == "POST":
		print("post")
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(username=username, password=password)
		print(username, password)
		if user is not None:
			if user.is_active:
				login(request, user)

			else:
				return render(request, 'apps/home/index.html', {})
		else:
			pass

def signout(request):
	logout(request)