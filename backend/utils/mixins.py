from django.db import models


class TimestampMixin(models.Model):
    """
    Model mixin that provides timestamping fields.
    """
    create_date = models.DateTimeField('date created', auto_now_add=True)
    modify_date = models.DateTimeField('date modified', auto_now=True)

    class Meta:
        abstract = True
