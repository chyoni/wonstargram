from rest_framework import serializers
from . import models
from wonstargram.users import serializers as user_serializers
from wonstargram.images import serializers as image_serializers


class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'
