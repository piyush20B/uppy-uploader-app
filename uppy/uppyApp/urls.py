from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('ultra-search/<str:query>', views.search_ultra, name='ultra-search'),
    path('search/<str:query>', views.search, name='search'),
    path('about/', views.about, name='about'),
    path('viewer/', views.viewer, name='viewer'),
    path('contact/', views.contact, name='contact'),
    path('favourites/', views.favourites, name='favourites'),
    path('settings/', views.settings, name='settings'),
    path('profile/<str:user>/', views.profile, name='profile'),
]