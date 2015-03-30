from django.shortcuts import render

# Create your views here.
def detail(request):
	context = {}
	template = 'apps/article/detail.html'
	return render(request, template, context)