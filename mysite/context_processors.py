from django.conf import settings


def config(request):
    content = {
        'BASE_DIR': settings.BASE_DIR,
        'PATH': request.path.split('/'),
    }
    return content