"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from app import views

urlpatterns = [
	# django and installed apps
    path('admin/', admin.site.urls),

    # api endpoints
    path(r'health/', views.health, name="health"),
    path(r'api/', include('api.urls'), name="api"),
]

# add static file patterns (for admin site)
# urlpatterns += staticfiles_urlpatterns()
