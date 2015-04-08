from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('apps.home.urls', namespace="home")),
    url(r'^article/', include('apps.article.urls', namespace="article")),
    url(r'^learn/', include('apps.learn.urls', namespace="learn")),
    url(r'^account/', include('apps.account.urls', namespace="account")),
)
