from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse

# Create your views here.
def home(request):
	
	not_pjax = True
	if 'HTTP_XD_PJAX' in request.META:
		if request.META['HTTP_XD_PJAX'] == 'true':
			not_pjax = False

	context = {
		'not_pjax': not_pjax
	}
	template = 'apps/home/index.html'
	return render(request, template, context)