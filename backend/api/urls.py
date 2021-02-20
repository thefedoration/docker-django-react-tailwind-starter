from django.urls import path, include

app_name = 'api'
urlpatterns = [
    path(r'v1/', include('api.v1.urls')),
]
