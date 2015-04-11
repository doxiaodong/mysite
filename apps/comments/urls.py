from django.conf.urls import patterns, include, url
from . import views

urlpatterns = patterns(
    '',
    url(r'^add/(?P<article>\w+)/$', views.add_reply, name='add_reply'),
)