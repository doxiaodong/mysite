from django.conf import settings


def config(request):
    content = {
        'BASE_DIR': settings.BASE_DIR,
        'PATH': filter(lambda x: x, request.path.split('/')),
    }
    return content