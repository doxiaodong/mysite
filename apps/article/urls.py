from django.conf.urls import patterns, include, url
from apps.article import views

urlpatterns = patterns('',
	url(r'^detail$', views.detail, name = 'article_detail'),
)