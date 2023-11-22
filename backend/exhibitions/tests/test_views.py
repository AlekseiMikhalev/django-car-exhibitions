from django.test import TestCase
from django.urls import reverse
from datetime import datetime
from rest_framework import status
from rest_framework.test import APIClient

from ..models import Exhibition


class TestExhibitionViewTest(TestCase):
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
        self.client = APIClient()

    def test_all_exhibitions_view(self):
        url = reverse("all_exhibitions")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_exhibition_detail_view(self):
        url = reverse("exhibition_detail", args=[self.exhibition.title])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = response.data
        self.assertEqual(data['id'], self.exhibition.id)
        self.assertEqual(data['title'], "Test exhibition")
        self.assertEqual(data['summary'], "Test summary")
        self.assertEqual(data['cover_image'],
                         "/media/exhibition_covers/test_image.webb")
        self.assertEqual(data['address'], "Test address")
        self.assertEqual(data['ticket_price'], "10.00")
        self.assertEqual(data['contact_details'], "Test contact details")
        self.assertEqual(data['start_date'], "November 22, 2023")
        self.assertEqual(data['end_date'], "December 01, 2023")
