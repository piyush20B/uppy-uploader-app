from django.urls import path
from . import views

urlpatterns = [
    path('', views.signup, name='signup'),
    path('', views.login, name='login'),
    path('', views.logout, name='logout'),
    path('', views.forgetPass, name='home'),
    path('', views.resetPass, name='home'),
]