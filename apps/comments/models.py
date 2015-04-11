from django.db import models
from apps.article.models import Article
from django.contrib.auth.models import User


# Create your models here.
class Comment(models.Model):
    article = models.ForeignKey(Article)
    reply_user = models.ForeignKey(User)
    # reply_object = models.ForeignKey(User)

    content = models.TextField('内容')
    reply_time = models.DateTimeField('回复时间')

    def __str__(self):
        return self.content