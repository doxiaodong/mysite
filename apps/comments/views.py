from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed
from django.utils import timezone
from django.contrib.auth.models import User
from apps.article.models import Article
from .models import Comment, SubComment


# Create your views here.
def add_reply(request, article):

    if request.method == 'POST':
        post_data = eval(request.body)

        content = post_data.get('content', None)

        if request.user.username:

            if content == '':
                respose = {'status': False, 'data': {'error': '回复不能为空！'}}
                return JsonResponse(respose)

            else:
                url = timezone.now().strftime('%Y%m%d%H%M%S')
                reply_time = timezone.now()
                user = User.objects.get(username=request.user.username)
                article = Article.objects.get(url=article)

                try:
                    comment = Comment(url=url,
                                      article=article,
                                      reply_user=user,
                                      content=content,
                                      reply_time=reply_time)
                except Exception as err:
                    print(err)

                comment.save()
                respose = {'status': True, 'data': {'error': '成功！'}}
                return JsonResponse(respose)
        else:
            respose = {'status': False, 'data': {'error': '请先登录！', 'not_login': True}}
            return JsonResponse(respose)


def add_sub_reply(request, head):

    if request.method == 'POST':
        post_data = eval(request.body)

        reply_object_str = post_data.get('reply_object', None)
        content = post_data.get('content', None)

        if content == '' or reply_object_str == '':
            respose = {'status': False, 'data': {'error': '回复或回复对象不能为空！'}}
            return JsonResponse(respose)
        else:
            reply_time = timezone.now()
            user = User.objects.get(username=request.user)

            reply_object = User.objects.get(username=reply_object_str)
            head = Comment.objects.filter(url=head)

            sub_comment = SubComment(head=head,
                                     reply_user=user,
                                     reply_object=reply_object,
                                     content=content,
                                     reply_time=reply_time)
            sub_comment.save()
            respose = {'status': True, 'data': {'error': '成功！'}}
            return JsonResponse(respose)