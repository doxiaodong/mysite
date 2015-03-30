from django.shortcuts import render

# Create your views here.
def home(request):
	context = {}
	template = 'apps/home/index.html'
	return render(request, template, context)