from django.test import TestCase
from datetime import datetime

from ..models import Exhibition


class TestExhibitionModelTest(TestCase):
    def setUp(self):
        self.exhibition = Exhibition.objects.create(
            title="Test Exhibition",
            summary="Test summary",
            start_date=datetime(2023, 11, 22).date(),
            end_date=datetime(2023, 12, 1).date(),
            address="Test address",
            cover_image="exhibition_covers/test_image.webb",
            ticket_price=10.0,
            contact_details="Test contact details",
        )

    def test_exhibition_str_method(self):
        self.assertEqual(str(self.exhibition), "Test Exhibition")
