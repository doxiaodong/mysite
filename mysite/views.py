from django import http
from django.template import Context, Engine, TemplateDoesNotExist, loader


def page_not_found(request, template_name='404.html'):
    context = {'request_path': request.path, 'not_pjax': True}
    try:
        template = loader.get_template(template_name)
        body = template.render(context, request)
        content_type = None             # Django will use DEFAULT_CONTENT_TYPE
    except TemplateDoesNotExist:
        template = Engine().from_string(
            '<h1>Not Found</h1>'
            '<p>The requested URL {{ request_path }} was not found on this server.</p>')
        body = template.render(Context(context))
        content_type = 'text/html'
    return http.HttpResponseNotFound(body, content_type=content_type)