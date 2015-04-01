from django.conf.urls import patterns, include, url
from apps.account import views

urlpatterns = [
    # url(r'^(?P<question_id>\d+)/$', views.detail, name='learn_detail'),
    # url(r'^(?P<question_id>\d+)/vote/$', views.vote, name='vote'),
    # url(r'^index/$', views.index, name='index'),
    url(r'^register/$', views.register, name='register'),
    url(r'^signin/$', views.signin, name='signin'),
    url(r'^signout/$', views.signout, name='signout'),

]