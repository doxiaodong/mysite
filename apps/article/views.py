# coding:utf-8
from django.shortcuts import render
from .models import *
from ..comments.models import *


# Create your views here.
def detail(request, category, pk):
    not_pjax = True
    if 'HTTP_XD_PJAX' in request.META:
        if request.META['HTTP_XD_PJAX'] == 'true':
            not_pjax = False

    category = ArticleCategory.objects.get(url=category)
    article = Article.objects.get(id=pk)

    comment = Comment.objects.filter(article=article)
    subreplys = {}

    index = 1
    for head in comment:
        sub = SubComment.objects.filter(head=head)
        subreplys[head] = sub
        head.index = index
        index += 1

    context = {
        'not_pjax': not_pjax,
        'article': article,
        'category': category,
        'replys': comment,
        'subreplys': subreplys
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