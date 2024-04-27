from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UppyUserCredentials(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # My Custom Modles

    GENDER_CHOICE = [('Male', 'Male'),('Female', 'Female'),('Other', 'Other'),('Not to say', 'Not to say')]

    Emergency_id01 = models.CharField(max_length=10, unique = True)
    Emergency_id02 = models.CharField(max_length=10, unique = True)
    phone = models.CharField(max_length=13)
    phone_alt = models.CharField(max_length=13, default=None, null=True)
    gender = models.CharField(max_length=20, choices= GENDER_CHOICE)
    birth = models.DateField(auto_now=False)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    pinCode = models.CharField(max_length=6)
    Avatar = models.ImageField(upload_to="profile/avatar", default="Uploads_from_User/profile/avatar/person-circle.svg")

    class Meta:
        verbose_name = "UppyUserCredentials"
        verbose_name_plural = "UppyUserCredentials"

    def __str__(self):
        return self.user.username
