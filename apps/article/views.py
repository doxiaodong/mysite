from django.shortcuts import render
from .models import *


# Create your views here.
def detail(request, category, pk):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False

    category = ArticleCategory.objects.get(url=category)

    context = {
        'not_pjax': not_pjax,
        'articleCategory': ArticleCategory.objects.all(),
        'article': Article.objects.get(id=pk),
        'category': category
    }
    template = 'apps/article/detail.html'
    return render(request, template, context)