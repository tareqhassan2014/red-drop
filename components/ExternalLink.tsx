import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { ComponentProps } from "react";
import { Platform } from "react-native";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
    href: string;
    children: React.ReactNode;
};

export function ExternalLink({ href, children, ...rest }: Props) {
    return (
        <Link
            target="_blank"
            href={href as any} // Type assertion to resolve the error
            {...rest}
            onPress={async (event) => {
                if (Platform.OS !== "web") {
                    // Prevent the default behavior of linking to the default browser on native.
                    event.preventDefault();
                    // Open the link in an in-app browser.
                    await WebBrowser.openBrowserAsync(href);
                }
            }}
        >
            {children}
        </Link>
    );
}
