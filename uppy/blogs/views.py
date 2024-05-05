from django.shortcuts import render

# Create your views here.

def blogs(request):
    return render(request, 'blogs/blogs.html')

def blog_post(request):
    return render(request, 'blogs/post.html')

def communities(request):
    return render(request, 'blogs/communities.html')

def write(request):
    return render(request, 'blogs/write`.html')
