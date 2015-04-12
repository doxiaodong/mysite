# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('comments', '0003_comment_reply_object'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubComment',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(verbose_name='内容')),
                ('reply_time', models.DateTimeField(verbose_name='回复时间')),
            ],
        ),
        migrations.RemoveField(
            model_name='comment',
            name='reply_object',
        ),
        migrations.AddField(
            model_name='subcomment',
            name='head',
            field=models.ForeignKey(to='comments.Comment'),
        ),
        migrations.AddField(
            model_name='subcomment',
            name='reply_object',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, blank=True, related_name='reply_object', null=True),
        ),
        migrations.AddField(
            model_name='subcomment',
            name='reply_user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
