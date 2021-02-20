from django.urls import path, include

from . import views

urlpatterns = [
	path(r'user-config/', views.UserConfigView.as_view(), name="user-config"),
]
