# coding:utf-8
from django.conf.urls import patterns, include, url
from . import views

urlpatterns = [
    url(r'^$', views.socket, name='index'),

]