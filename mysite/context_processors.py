from django.conf import settings
import uuid
from django.utils import timezone


def config(request):
    content = {
        'BASE_DIR': settings.BASE_DIR,
        'PATH': request.path.split('/'),
        'VERSION': timezone.now().strftime("%Y-%m-%d"),
        'not_pjax': True,
        # 'QQ': {
        #     'response_type': 'code',
        #     'client_id': settings.QQ['APP_ID'],
        #     'redirect_uri': 'https://darlin.me',
        #     'state': uuid.uuid4(),
        # },
        'QQ_URL': settings.QQ['URL']+'?response_type=code&client_id='+settings.QQ['APP_ID']+'&redirect_uri=https://darlin.me&state='+str(uuid.uuid4()),
    }
    return content