from django.db import models
from apps.article.models import Article
from django.contrib.auth.models import User


# Create your models here.
class Comment(models.Model):
    url = models.CharField("评论楼层URL地址，最好用日期", max_length=100)
    article = models.ForeignKey(Article)
    reply_user = models.ForeignKey(User)

    content = models.TextField('内容')
    reply_time = models.DateTimeField('回复时间')

    def __str__(self):
        return self.content


class SubComment(models.Model):
    head = models.ForeignKey(Comment)
    reply_user = models.ForeignKey(User)
    reply_object = models.ForeignKey(User, related_name="reply_object", null=True, blank=True)

    content = models.TextField('内容')
    reply_time = models.DateTimeField('回复时间')