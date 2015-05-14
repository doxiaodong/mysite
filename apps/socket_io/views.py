from django.shortcuts import render
from django.conf import settings
import hashlib

# Create your views here.


def socket(request):
    m = hashlib.md5()

    if settings.IS_LOCAL:
        host = '://localhost:3030'
    else:
        host = '://www.darlin.me'

    if 'HTTP_X_FORWARDED_FOR' in request.META:
        ip = request.META.get('HTTP_X_FORWARDED_FOR', None)
    else:
        ip = request.META.get('REMOTE_ADDR', None)

        m.update(ip)

        ip_md5 = m.hexdigest()
    context = {
        'host': host, 'NOJS': True,
        'ip': ip,
        'ip_md5': ip_md5
    }
    template = 'socket/index.html'
    return render(request, template, context)