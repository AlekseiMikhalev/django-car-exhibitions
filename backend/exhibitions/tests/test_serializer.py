from django.test import TestCase
from datetime import datetime

from ..models import Exhibition
from ..serializers import ExhibitionSerializer


class TestExhibitionSerializerTest(TestCase):
    def setUp(self):
        self.exhibition = Exhibition.objects.create(
            title="Test exhibition",
            summary="Test summary",
            start_date=datetime(2023, 11, 22).date(),
            end_date=datetime(2023, 12, 1).date(),
            address="Test address",
            cover_image="exhibition_covers/test_image.webb",
            ticket_price=10.0,
            contact_details="Test contact details",
        )
        self.serializer = ExhibitionSerializer(instance=self.exhibition)

    def test_serializer_representation(self):
        data = self.serializer.to_representation(instance=self.exhibition)
        self.assertEqual(data.keys(), {'id', 'title', 'summary', 'cover_image',
                                       'start_date', 'end_date', 'address', 'ticket_price', 'contact_details'})
