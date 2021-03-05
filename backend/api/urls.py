from django.urls import path, include

from rest_framework_simplejwt import views as jwt_views

app_name = 'api'
urlpatterns = [
    path(r'v1/', include('api.v1.urls')),

    # jwt auth endpoints
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
