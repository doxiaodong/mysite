from django.shortcuts import render


def page_not_found(request):
    context = {'request_path': request.path, 'not_pjax': True}
    template = '404.html'
    return render(request, template, context)