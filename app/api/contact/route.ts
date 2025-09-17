import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Debug environment variables
console.log('Environment check:', {
  hasApiKey: !!process.env.RESEND_API_KEY,
  hasEmail: !!process.env.YOUR_EMAIL,
  apiKeyLength: process.env.RESEND_API_KEY?.length || 0
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this to your domain
        to: [process.env.YOUR_EMAIL || 'pratishtha.verma@email.com'], // Your email address
        subject: `New contact form submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Quick Actions:</strong><br>
                • Reply directly to this email to respond to ${name}<br>
                • View their email: <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px; text-align: center;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
        replyTo: email, // This allows you to reply directly to the sender
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
      
      return NextResponse.json(
        { message: 'Message sent successfully', emailId: data?.id },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Example function to send email using Resend (you'll need to install resend)
/*
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
*/

// Example function to save to database (using Prisma)
/*
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveToDatabase({ name, email, message }: { name: string; email: string; message: string }) {
  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
        createdAt: new Date(),
      },
    });

    return contact;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}
*/
