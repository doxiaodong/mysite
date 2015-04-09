# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import DjangoUeditor.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('title', models.CharField(verbose_name='标题', max_length=255)),
                ('content', DjangoUeditor.models.UEditorField(verbose_name='内容')),
                ('create_time', models.DateTimeField(verbose_name='发布时间')),
                ('pic', models.ImageField(blank=True, verbose_name='图片', upload_to='', null=True)),
                ('hot', models.BooleanField(verbose_name='热门')),
            ],
        ),
        migrations.CreateModel(
            name='ArticleCategory',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(verbose_name='文章类型', max_length=255)),
                ('url', models.CharField(verbose_name='URL地址', max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.ForeignKey(to='article.ArticleCategory'),
        ),
    ]
