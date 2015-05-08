from django.shortcuts import render
from django.conf import settings

# Create your views here.


def socket(request):
    if settings.IS_LOCAL:
        host = 'http://localhost:3030'
    else:
        host = 'https://www.darlin.me'
    context = {'host': host, 'NOJS': True}
    template = 'socket/index.html'
    return render(request, template, context)