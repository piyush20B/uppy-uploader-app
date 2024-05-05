from django.urls import path
from . import views

urlpatterns = [
    path("blogs/", views.blogs, name="blogs"),
    path("blog/post/<str:slug>/", views.blog_post, name="post"),
    path("communties/", views.communities, name="communites"),
    path("write/", views.write, name="write-blog"),
]
