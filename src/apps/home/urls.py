# coding:utf-8
from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns(
    '',
    url(r'^$', views.home, name='home_index'),
)