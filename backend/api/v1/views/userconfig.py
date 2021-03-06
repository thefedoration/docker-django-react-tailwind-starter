"""
User config API
"""
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

class UserConfigView(APIView):
    """
    View that is called by the frontend upon initalizing the app
    to identify the user and the information about their account
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        config = {
        	'identity': {
        		'id': request.user.id,
        		'username': request.user.username,
                'email': request.user.email,
        	},
            'features': {

            }
        }
        return Response(config)

