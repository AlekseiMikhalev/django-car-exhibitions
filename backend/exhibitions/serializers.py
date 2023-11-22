from rest_framework import serializers
from .models import Exhibition


class ExhibitionSerializer(serializers.ModelSerializer):
    """
    Serializer for the Exhibition model.
    """

    class Meta:
        model = Exhibition
        fields = '__all__'

    def to_representation(self, instance: Exhibition) -> dict:
        """
        Custom representation method to include formatted start and end dates.

        Args:
            instance (Exhibition): The Exhibition instance.

        Returns:
            dict: Serialized representation of the Exhibition.
        """
        representation = super().to_representation(instance)
        representation['start_date'] = instance.formatted_start_date
        representation['end_date'] = instance.formatted_end_date
        return representation
