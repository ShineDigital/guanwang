from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request,'index.html')

def about_us(request):
    return render(request,'about-us.html')

def services(request):
    return render(request,'services.html')

def portfolio(request):
    return render(request,'portfolio.html')

def blog(request):
    return render(request,'blog.html')

def contact_us(request):
    return render(request,'contact-us.html')

def project_item(request):
    return render(request,'project-item.html')

def blog_item(request):
    return render(request,'blog-item.html')

def Intelligence_Assistant(request):
    return render(request,'Intelligence-Assistant.html')

def Optimization_Programme(request):
    return render(request,'Optimization-Programme.html')

def Digital_Presentation(request):
    return render(request,'Digital-Presentation.html')

def index_single_page(request):
    return render(request,'index-single-page.html')