from django.shortcuts import render
from .models import *
from apps.comments.models import *


# Create your views here.
def detail(request, category, pk):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False

    category = ArticleCategory.objects.get(url=category)
    article = Article.objects.get(id=pk)

    context = {
        'not_pjax': not_pjax,
        'articleCategory': ArticleCategory.objects.all(),
        'article': article,
        'category': category,
        'replys': Comment.objects.all().filter(article=article)
    }
    template = 'apps/article/detail.html'
    return render(request, template, context)


def article_list(request, category):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False
    category = ArticleCategory.objects.get(url=category)
    context = {
        'not_pjax': not_pjax,
        'articleCategory': ArticleCategory.objects.all(),
        'articles': Article.objects.filter(category=category),
        'category': category
    }
    template = 'apps/article/list.html'
    return render(request, template, context)


def article_view(request):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False

    context = {
        'not_pjax': not_pjax,
        'articleCategory': ArticleCategory.objects.all(),
        'articles': Article.objects.all()
    }
    template = 'apps/article/list.html'
    return render(request, template, context)