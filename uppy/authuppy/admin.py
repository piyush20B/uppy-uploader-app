from django.contrib import admin
from .models import UppyUserCredentials
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class AccountInLine(admin.StackedInline):
    model = UppyUserCredentials
    can_delete = False
    verbose_name_plural = "UppyUserCredentials"

class CustomUserAdmin(UserAdmin):
    inlines = (AccountInLine, )

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
admin.site.register(UppyUserCredentials)