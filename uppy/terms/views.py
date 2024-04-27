from django.shortcuts import render

# Create your views here.


def termsAndConditions(request):
    return render(request, 'terms/terms.html')

def privacy(request):
    return render(request, 'terms/privacy.html')