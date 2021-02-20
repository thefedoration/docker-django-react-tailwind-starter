from datetime import datetime, timedelta
from django.utils import timezone


def get_full_time(timestamp):
    """
    Pretty print time
    timestamp: datetime object
    """
    return timestamp.strftime('%a %m/%d/%Y %I:%M %p')


def get_human_readable_time(timestamp):
    """
    if today, give time. if before today, give date
    timestamp: datetime object
    """
    now = datetime.now()

    # today returns exact time
    if timestamp.date() == now.date():
        return timestamp.strftime('%I:%M %p')

    # more than last year, return date with year
    if timestamp.year != now.year:
        return timestamp.strftime('%m/%d/%Y')

    # more than a month ago, return just date
    if timestamp < now - timedelta(days=30):
        return timestamp.strftime('%m/%d')

    # return date with day as default
    return timestamp.strftime('%a %m/%d')