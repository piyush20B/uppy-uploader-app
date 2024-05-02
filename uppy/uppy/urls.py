from django.contrib import admin
from django.urls import path, include
from authuppy import urls as authurls
from uppyApp import urls as home
from uploads import urls as uploadsurls
from terms import urls as termsurls
from usages import urls as useurls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include(authurls)),
    path('', include(home)),
    path('upload/', include(uploadsurls)),
    path('usage/', include(useurls)),
    path('terms/', include(termsurls)),
]
