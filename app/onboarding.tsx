import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const { width } = Dimensions.get("window");

interface OnboardingSlide {
    title: string;
    description: string;
}

const slides: OnboardingSlide[] = [
    {
        title: "Collection of Blood",
        description: "Collection of Blood from Registered Donor",
    },
    {
        title: "Donation Centers",
        description: "Nearby Donation Campaign/Centers",
    },
    {
        title: "Request Blood",
        description: "Request Blood - Specify Your Needs",
    },
];

export default function OnboardingScreen() {
    const [activeSlide, setActiveSlide] = useState(0);
    const router = useRouter();
    const scrollViewRef = React.useRef<ScrollView>(null);

    const handleNext = () => {
        if (activeSlide < slides.length - 1) {
            setActiveSlide((prev) => prev + 1);
            scrollViewRef.current?.scrollTo({
                x: width * (activeSlide + 1),
                animated: true,
            });
        } else {
            router.replace("/auth/login");
        }
    };

    const handleScroll = (event: any) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        if (slideIndex !== activeSlide) {
            setActiveSlide(slideIndex);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={styles.slideContainer}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={[styles.slide, { width }]}>
                        {/* Placeholder for illustrations */}
                        <View style={styles.illustration} />

                        <Text variant="headlineMedium" style={styles.title}>
                            {slide.title}
                        </Text>

                        <Text variant="bodyLarge" style={styles.description}>
                            {slide.description}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.pagination}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                index === activeSlide &&
                                    styles.paginationDotActive,
                            ]}
                        />
                    ))}
                </View>

                <Button
                    mode="contained"
                    onPress={handleNext}
                    style={styles.button}
                >
                    {activeSlide === slides.length - 1 ? "Get Started" : "Next"}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    slideContainer: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    illustration: {
        width: width * 0.7,
        height: width * 0.7,
        backgroundColor: "#f5f5f5", // Placeholder color
        borderRadius: 20,
        marginBottom: 40,
    },
    title: {
        textAlign: "center",
        marginBottom: 16,
        color: "#000",
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        color: "#666",
        marginBottom: 24,
    },
    footer: {
        padding: 20,
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ddd",
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: "#E53935",
        width: 20,
    },
    button: {
        borderRadius: 8,
    },
});
